// const ctx = document.getElementById('appreciationChart').getContext('2d');
// const appreciationChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Team Alpha', 'Team Bravo', 'Team Delta', 'Team Sigma', 'Team Orion'],
//     datasets: [{
//         label: 'Appreciation Score (%)',
//       data: [88, 76, 94, 67, 82],
//       backgroundColor: [
//         '#8e44ad', '#9b59b6', '#6c3483', '#bb8fce', '#5b2c6f'
//       ],
//       borderRadius: 10,
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//         ticks: {
//           callback: function(value) {
//             return value + '%'; // Y-axis labels in percentage
//           }
//         }
//       }
//     },
//     plugins: {
//         legend: {
//           display: false
//         },
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               return `Score: ${context.parsed.y}%`; // Tooltip in percentage
//             }
//           }
//         }
//       }
//     }
//   });

// const ctx = document.getElementById('appreciationChart').getContext('2d');

//     const teamSlugs = ['team-alpha', 'team-bravo', 'team-delta', 'team-sigma', 'team-orion'];

//     const appreciationChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Team Alpha', 'Team Bravo', 'Team Delta', 'Team Sigma', 'Team Orion'],
//         datasets: [{
//           label: 'Appreciation Score (%)',
//           data: [88, 76, 94, 67, 82],
//           backgroundColor: [
//             '#8e44ad', '#9b59b6', '#6c3483', '#bb8fce', '#5b2c6f'
//           ],
//           borderRadius: 10,
//         }]
//       },
//       options: {
//         onClick: (event, elements) => {
//           if (elements.length > 0) {
//             const index = elements[0].index;
//             const slug = teamSlugs[index];
//             showSection(slug);
//           }
//         },
//         scales: {
//           y: {
//             beginAtZero: true,
//             max: 100,
//             ticks: {
//               callback: function(value) {
//                 return value + '%';
//               }
//             }
//           }
//         },
//         plugins: {
//           legend: { display: false },
//           tooltip: {
//             callbacks: {
//               label: function(context) {
//                 return `Score: ${context.parsed.y}%`;
//               }
//             }
//           }
//         }
//       }
//     });

//     function showSection(slugToShow) {
//       teamSlugs.forEach(slug => {
//         const section = document.getElementById(slug);
//         section.style.display = slug === slugToShow ? 'block' : 'none';
//       });
//     }

const ctx = document.getElementById('appreciationChart').getContext('2d');

const teamData = {
  "Team Alpha": {
    score: "88%",
    details: "Team Alpha has consistently performed well in cross-functional collaborations and knowledge sharing."
  },
  "Team Bravo": {
    score: "76%",
    details: "Team Bravo has demonstrated great improvement in project execution and client communications."
  },
  "Team Delta": {
    score: "94%",
    details: "Team Delta consistently exceeds expectations in innovation and delivery speed."
  },
  "Team Sigma": {
    score: "67%",
    details: "Team Sigma is working on improving turnaround time and strengthening collaboration."
  },
  "Team Orion": {
    score: "82%",
    details: "Team Orion is known for its problem-solving skills and leadership in initiatives."
  }
};

const appreciationChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: Object.keys(teamData),
    datasets: [{
      label: 'Appreciation Score (%)',
      data: Object.values(teamData).map(team => parseInt(team.score)),
      backgroundColor: ['#8e44ad', '#9b59b6', '#6c3483', '#bb8fce', '#5b2c6f'],
      borderRadius: 10,
    }]
  },
  options: {
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const label = appreciationChart.data.labels[index];
        openModal(label);
      }
    },
    onHover: (event, chartElement) => {
      event.native.target.style.cursor = chartElement.length ? 'pointer' : 'default';
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Score: ${context.parsed.y}%`;
          }
        }
      }
    }
  }
});

function openModal(teamName) {
  const modal = document.getElementById("teamModal");
  const modalBody = document.getElementById("modalBody");
  const team = teamData[teamName];

  modalBody.innerHTML = `
    <h3>${teamName} - Appreciation Details</h3>
    <p><strong>Score:</strong> ${team.score}</p>
    <p>${team.details}</p>
  `;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("teamModal").style.display = "none";
}

// Close modal when clicking outside the content
window.onclick = function(event) {
  const modal = document.getElementById("teamModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



const newsSection = document.querySelector('.news-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      newsSection.classList.add('visible');
      observer.unobserve(entry.target); // trigger once
    }
  });
}, {
  threshold: 0.3
});

if (newsSection) {
  observer.observe(newsSection);
}


document.getElementById('scrollToTop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


    // Open HR modal function
    function openHRModal() {
      document.getElementById('hrmodal').classList.remove('hidden');
    }

    // Close HR modal function
    function closeHRModal() {
      document.getElementById('hrmodal').classList.add('hidden');
    }
