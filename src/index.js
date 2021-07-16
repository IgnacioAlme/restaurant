console.log('It works!');

function component() {
    // Create tags
    const html = document.querySelector('html');
    const content = document.querySelector('#content');
    const nav = document.createElement('nav');
    const footer = document.createElement('footer');

    const header = document.createElement('h1');
    const para = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    // Functions
    function generateList(data) {
        var i, item, ref = {}, counts = {};
        function ul() {return document.createElement('ul');}
        function li(text) {
            var e = document.createElement('li');
            e.appendChild(document.createTextNode(text));
            return e;
        }
        ref[0] = ul();
        counts[0] = 1;
        for (i = 0; i < data.length; ++i) {
            ref[data[i].parentId].appendChild(li(data[i]['name'])); // create <li>
            ref[data[i].id] = ul(); // assume + create <ul>
            ref[data[i].parentId].appendChild(ref[data[i].id]);
            counts[data[i].id] = 0;
            counts[data[i].parentId] += 1;
        }
        for (i in counts) // for every <ul>
            if (counts[i] === 0) // if it never had anything appened to it
                ref[i].parentNode.removeChild(ref[i]); // remove it
        return ref[0];
    }
    
    let navList = [
        {'id': 1, 'parentId': 0, 'name': 'Home'},
        {'id': 2, 'parentId': 1, 'name': 'Menu'},
        {'id': 3, 'parentId': 2, 'name': 'Contact'}
    ];

    // Assign content
    nav.appendChild(generateList(navList));
    content.appendChild(nav);

    header.innerHTML = 'Restaurant';
    content.appendChild(header);
    
    para.innerHTML = `Omnis dolore est iusto deleniti sed cupiditate. 
                    Maiores adipisci aut cumque aliquam occaecati et. 
                    Ut ea rerum consequatur itaque quo est nobis. 
                    Saepe aspernatur aliquid beatae dolorem laboriosam est. 
                    Est qui quod sint amet sit.`;
    div1.appendChild(para);
    content.appendChild(div1);

    para2.innerHTML = `Modi porro voluptatum consequuntur qui dolorem natus omnis. 
                    Ab accusamus suscipit rerum consequatur aut quaerat. 
                    Facere voluptatem nisi voluptatem non ullam et quia. 
                    Porro quia illum nihil cumque et qui. Est nihil qui perspiciatis ut aspernatur in.`
    div2.appendChild(para2);
    content.appendChild(div2);

    para3.innerHTML = `Quis quas qui neque illum. Veritatis excepturi rerum nostrum. 
                    Modi nemo est qui et sit asperiores. Ut animi aliquid dolorum quo sint quia nulla. 
                    Laudantium animi nisi corrupti praesentium nisi consequatur quo nemo.`
    div3.appendChild(para3);
    content.appendChild(div3);

    footer.innerHTML = 'Contact info: asdfg@gmail.com'
    return content;
}

// Appending
content.appendChild(component());