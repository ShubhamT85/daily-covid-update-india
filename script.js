async function fetchData() {
  const res = await fetch(
    "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
  );
  const record = await res.json();
  let newDate = new Date().toLocaleDateString();
  document.getElementById("date").innerHTML = newDate;

  document.getElementById("areaName").innerHTML = "India";
  document.getElementById("latestBy").innerHTML =
    record.activeCases + record.activeCasesNew;
  document.getElementById("deathNew").innerHTML = record.deathsNew;
}
fetchData();
