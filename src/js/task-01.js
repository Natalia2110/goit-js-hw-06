const arrayItem = document.querySelectorAll('.item');
    console.log(`Number of categories: ${arrayItem.length}`);
    // console.log(arrayItem);

    arrayItem.forEach(element => {

        const titleEl = element.firstElementChild.textContent;
        console.log(`Category: ${titleEl}`);
        
        const itemElements = element.querySelectorAll('li');
        console.log(`Elements: ${itemElements.length}`);
    })