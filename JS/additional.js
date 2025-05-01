fetch('/api/data')
  .then(res => res.json())
  .then(data => {
    // then use the same logic to extract labels and values from 'data'
  });