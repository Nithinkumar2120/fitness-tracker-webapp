const list = document.getElementById("list");

function addEntry() {
  const activity = document.getElementById("activity").value;
  const duration = document.getElementById("duration").value;

  if (!activity || !duration) {
    alert("Please enter both activity and duration");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${activity} - ${duration} minutes`;
  list.appendChild(li);

  document.getElementById("activity").value = "";
  document.getElementById("duration").value = "";
}
