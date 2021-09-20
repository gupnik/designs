(()=>{

    const domHeader = document.getElementById('cndce-header-wrapper');


    const domRoadmapSection = document.getElementById('roadmap');
    const domTimelineItems = document.getElementsByClassName('cndce-timeline-item');

    const domMobileMenu = document.getElementById('cndce-mobile-menu');
    const domMobileMenuClose = document.getElementById('cndce-menu-close');

    const domAdoptQuantity = document.getElementById("cndce-adopt-modal-quantity");
    const domAdoptQuantityMinus = document.getElementById('cndce-adopt-modal-quantity-btn-minus');
    const domAdoptQuantityPlus = document.getElementById('cndce-adopt-modal-quantity-btn-plus');
    const domAdoptQuantityValue = document.getElementById('cndce-adopt-modal-quantity-value');
    const domAdoptPrice = document.getElementById('cndce-adopt-modal-price');


    function initHeaderSticky(){
        if(window.scrollY > 0){
            domHeader.classList.remove('top');
        }else{
            domHeader.classList.add('top');
        }
    }

    function scrollTimelineDots(){
        Array.from(domTimelineItems).forEach(function(el){
            const pos = el.getBoundingClientRect();

            if(pos.top - window.innerHeight / 2 <= 0){
                el.classList.add('active');
            }else{
                el.classList.remove('active');
            }
        })
    }

    function showTimelineBg(){

        const pos = domRoadmapSection.getBoundingClientRect
        ();

        if(pos.top - window.innerHeight <= 0 && pos.bottom >= 0){
            document.body.classList.add('roadmap');
        }else{
            document.body.classList.remove('roadmap');
        }
        
    }


    function updateAdoptQuantityValue(delta){
        const value = parseInt(domAdoptQuantityValue.innerText) + delta;

        if(value >= domAdoptQuantity.dataset.min && value <= domAdoptQuantity.dataset.max){
            domAdoptQuantityValue.innerText = value;

            domAdoptPrice.innerText = (domAdoptPrice.dataset.baseprice * value).toFixed(2);
        }

    }

    window.addEventListener('scroll', function(){
        showTimelineBg();

        initHeaderSticky();
        scrollTimelineDots();
    })

    domMobileMenu.addEventListener('click', function(){
        document.body.classList.add('show-menu');
    })

    domMobileMenuClose.addEventListener('click', function(){
        document.body.classList.remove('show-menu');
    })

    domAdoptQuantityMinus.addEventListener('click', function(){
        updateAdoptQuantityValue(-1);
    })

    domAdoptQuantityPlus.addEventListener('click', function(){
        updateAdoptQuantityValue(1);
    })



    initHeaderSticky();
})();