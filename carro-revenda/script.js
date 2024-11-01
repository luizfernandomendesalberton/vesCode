document.addEventListener('DOMContentLoaded', function() {
    const carList = [
      { id: 1, model: 'Honda Civic', brand: 'Honda', price: 'R$ 45,000' },
      { id: 2, model: 'Toyota Corolla', brand: 'Toyota', price: 'R$ 50,000' },
      { id: 3, model: 'golf Esportiline', brand: 'volkswagen', price: 'R$ 41,000' },
      { id: 4, model: 'Ford Fiesta', brand: 'Ford', price: 'R$ 40,000' },
      { id: 5, model: 'onix', brand: 'chevrolet', price: 'R$ 40,000' },
      { id: 6, model: 'focus', brand: 'Ford', price: 'R$ 40,000' },
      { id: 7, model: 'gol', brand: 'woysvagem', price: 'R$ 32,000' },
      { id: 8, model: 'voagem', brand: 'woysvagem', price: 'R$ 35,000' },
      { id: 9, model: 'renegde', brand: 'geep', price: 'R$ 112,000' },
      { id: 10, model: 'eclips', brand: 'mitsubche', price: 'R$ 110,000' },
      { id: 11, model: 'focus', brand: 'Ford', price: 'R$ 40,000' },
      { id: 12, model: 'focus', brand: 'Ford', price: 'R$ 40,000' },
      { id: 13, model: 'focus', brand: 'Ford', price: 'R$ 40,000' },
      { id: 14, model: 'focus', brand: 'Ford', price: 'R$ 40,000' },
    ];
  
    const carContainer = document.getElementById('car-list');
    const carModal = document.getElementById('car-modal');
    const carDetails = document.getElementById('car-details');
    const closeModal = document.querySelector('.close');
  
    function renderCars(cars) {
      carContainer.innerHTML = '';
      cars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car-card');
        carDiv.innerHTML = `<h2>${car.model}</h2><p>${car.brand}</p><p>${car.price}</p>`;
        carDiv.addEventListener('click', () => openModal(car));
        carContainer.appendChild(carDiv);
      });
    }
  
    function openModal(car) {
      carDetails.innerHTML = `<h2>${car.model}</h2><p>Marca: ${car.brand}</p><p>Preço: ${car.price}</p>`;
      carModal.style.display = 'block';
    }
  
    closeModal.addEventListener('click', () => carModal.style.display = 'none');
    
    renderCars(carList);
  
    document.getElementById('search').addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase();
      const filteredCars = carList.filter(car =>
        car.model.toLowerCase().includes(query) || car.brand.toLowerCase().includes(query)
      );
      renderCars(filteredCars);
    });
  });
  