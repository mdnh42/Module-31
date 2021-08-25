const fish ={
    name: 'Hilsha', price: 34434, id: 343434343, phone: '34232323232', address: 'Chandarpu', dress: 'Silvver'};

    
    /* const phone = fish.phone;
    const price = fish.price;
    console.log(phone);
    console.log(price);
    
     */

    const {phone, id, price, name, address, dress} = fish;

    console.log(phone, id, price, name, address, dress);


    const myCompany = {
        companyName: 'NH Softwares',
        ceo: {
            name: 'MD Nur Hasan',
            designation: "Ceo",
            salary: 334343,
        },
        teamMember: {
            name: 'Member1'
        },
        workType: {
            software: {
                items: {
                    item1: 'html',
                    item2: 'css',
                    item3: 'js'
                }
            }
        }
    }

    const {item1, item2, item3, items} = myCompany.workType.software.items;

    console.log(item1, item2, item3);