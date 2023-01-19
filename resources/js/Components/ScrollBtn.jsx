import React, {useState} from 'react';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'auto'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<button className='scroll-button'>
	<i class="fas fa-long-arrow-up"  onClick={scrollToTop} />
	</button>
);
}

export default ScrollButton;
