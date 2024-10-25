const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}


const displayPhones = phones => {
    // console.log(phones);

    // Step 1
    const phoneContainer = document.getElementById('phone-container');

    phones.forEach(phone => {
        console.log(phone);
        // Step 2. create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card bg-base-100 w-96 shadow-xl';
        // Step 3. set inner html
        phoneCard.innerHTML = `
        <figure>
                        <img src="${phone.image}"
                            alt="phone" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    `;
        // Step 4. append child
        phoneContainer.appendChild(phoneCard);

    })
}

loadPhone();