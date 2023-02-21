function tabs(tabsSelector,tabcontentSelector,tabsParentSelector,activeClass) {

    // Tabs
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabcontentSelector),
        tabsParent = document.querySelector(tabsParentSelector);
        
    function hideTabContent(tabsContent, tabs) {
        tabsContent.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show');

        });

        tabs.forEach((el) => {
            el.classList.remove("fade", activeClass);

        });
    }


    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass)

    }

    hideTabContent(tabsContent, tabs);
    showTabContent();



    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (e.target && e.target.classList.contains(tabsSelector.slice(1))) {
            hideTabContent(tabsContent, tabs);

            tabs.forEach((item, i) => {
                if (item == target) {
                    showTabContent(i);

                }
            });

            // for(let i =0;i < tabsParent.children.length;i++)
            //     if( tabsParent.children.item(i).isEqualNode(e.target)){
            //         showTabContent(i);
            //         break;
            //     }

        }


    })
}

export default tabs;