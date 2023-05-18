var filterBtn = document.getElementById('filter-btn');
var locationInput = document.getElementById('location');
var jobTypeInput = document.getElementById('job-type');
var jobList = document.getElementById('job-list');

filterBtn.addEventListener('click', function() {
  var selectedLocation = locationInput.value.toLowerCase();
  var selectedJobType = jobTypeInput.value.toLowerCase();
  var jobs = JSON.parse(localStorage.getItem('jobs'));

  // Filter jobs based on selected criteria
  var filteredJobs = jobs.filter(function(job) {
    var jobLocation = job.location.toLowerCase();
    var jobType = job.type.toLowerCase();

    return jobLocation.includes(selectedLocation) && jobType.includes(selectedJobType);
  });

  // Display filtered job results
  displayJobs(filteredJobs);
});

function displayJobs(jobs) {
  jobList.innerHTML = '';

  if (jobs.length > 0) {
    for (var i = 0; i < jobs.length; i++) {
      var job = jobs[i];
      var li = document.createElement('li');
      li.textContent = job.title;
      jobList.appendChild(li);
    }
  } else {
    var li = document.createElement('li');
    li.textContent = 'No jobs found.';
    jobList.appendChild(li);
  }
}