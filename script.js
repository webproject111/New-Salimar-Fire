function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }


   const form = document.querySelector('.service-booking-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Submit form using fetch API
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        form.style.display = "none";
        document.getElementById('confirmation-message').style.display = "block";
      } else {
        alert("There was an error submitting your request.");
      }
    });
  });

  // go back btn

  function goBack() {
  window.location.href = 'services.html';
}

// addProductBlock btn

   function addProductBlock() {
      const container = document.getElementById("additionalBlocks");

      const block = document.createElement("div");
      block.className = "product-block";

      block.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeBlock(this)">Remove</button>

        <label for="type">Type </label>
    <select id="type" name="extinguisher_type_">
      <option value="">--Select-- </option>
      <option value="abc">ABC </option>
      <option value="co2">CO2</option>
      <option value="foam">AFFF Foam</option>
      <option value="dcp">DCP</option>
      <option value="water">Water CO2</option>
    </select>
    <label for="capacity">Capacity</label>
    <input type="number and text" id="capacity" name="capacity">
    <label for="quantity">Quantity</label>
    <input type="number" id="quantity" name="quantity_" min="1" value="1">
      `;

      container.appendChild(block);
    }

    function removeBlock(button) {
      const block = button.parentNode;
      block.remove();
    }
