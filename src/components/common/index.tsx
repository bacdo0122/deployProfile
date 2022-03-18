const handleScroll = (setActive:any) => {

  const fadeInUp = document.getElementsByClassName(
    "fadeInUp_animation"
  ) as HTMLCollectionOf<Element>;
  const fadeIn = document.getElementsByClassName(
    "post-item"
  ) as HTMLCollectionOf<Element>;
  const window_height = window.innerHeight;
  const window_top_position = window.pageYOffset;
  const window_bottom_position = window_top_position + window_height;

    
    
  Array.from(fadeInUp).map((item: any, index:number) => {
    const element_height = item.offsetHeight;
    const element_top_position =
      item.getBoundingClientRect().top + window.scrollY;
    const element_bottom_position = element_top_position + element_height;
    if(element_top_position === window_top_position){

 
    }
    if ( 
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      if(window_bottom_position < 800) setActive("Home")
      else if(item.parentElement.id !== ""){
        setActive(item.parentElement.id)
      }
     
      item.style.animation = "fadeInUp 1s ease 0s both";
    }
  });
  Array.from(fadeIn).map((item: any, index:number) => {
    const element_height = item.offsetHeight;
    const element_top_position =
      item.getBoundingClientRect().top + window.scrollY;
    const element_bottom_position = element_top_position + element_height;
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      if(index === 0){
        item.style.animation = "fadein 1s ease .2s both";
      }
      if(index === 1){
        item.style.animation = "fadein 1s ease .4s both";
      }
      if(index === 2){
        item.style.animation = "fadein 1s ease .6s both";
      }
    }
  });

};


interface obj {
  id: number;
  type: Array<string>;
  title: string;
  image: string;
  icon: string;
}

const setHeightFunc = (
  current: String,
  load: boolean,
  getHeight: any,
  setHeight: any,
  category: obj[]
) => {
  if (current === "Everything") {
    if (!load) {
      if (window.innerWidth >= 768) {
        return getHeight!.clientHeight * 2 + 60;
      } else if (window.innerWidth < 768 && window.innerWidth >= 567) {
        return getHeight!.clientHeight * 3 + 60;
      } else if (window.innerWidth < 576) {
        return getHeight!.clientHeight * 6 + 60;
      }
    } else {
      if (window.innerWidth >= 768) {
        return getHeight!.clientHeight * 3 + 60;
      } else if (window.innerWidth < 768 && window.innerWidth >= 567) {
        return getHeight!.clientHeight * 5 + 60;
      } else if (window.innerWidth < 576) {
        return getHeight!.clientHeight * 9 + 60;
      }
    }
  } else {
    if (!load) {
      if (window.innerWidth >= 768) {
        return getHeight!.clientHeight + 60;
      } else if (window.innerWidth < 768 && window.innerWidth >= 567) {
        return getHeight!.clientHeight * (current === "Creative" ? 2 : 1) + 60;
      } else if (window.innerWidth < 576) {
        return (
          getHeight!.clientHeight *
            category.slice(0, category.length - 1).length +
          60
        );
      }
    } else {
      if (window.innerWidth >= 768) {
        console.log(
          getHeight!.clientHeight * (current === "Creative" ? 2 : 1) + 60
        );

        return getHeight!.clientHeight * (current === "Creative" ? 2 : 1) + 60;
      } else if (window.innerWidth < 768 && window.innerWidth >= 567) {
        return getHeight!.clientHeight * 2 + 60;
      } else if (window.innerWidth < 576) {
        console.log(category.slice(0, category.length - 1).length);

        return (
          getHeight!.clientHeight * category.slice(0, category.length).length +
          60
        );
      }
    }
  }
};
const setDataFunc = (
  current: String,
  load: boolean,
  setData: any,
  list_inline: obj[],
  category: obj[]
) => {
  if (current === "Everything") {
    if (!load) {
      setData(list_inline.slice(0, 6));
    } else {
      setData(list_inline);
    }
  } else {
    if (!load) {
      setData(category.slice(0, category.length - 1));
    } else {
      setData(category);
    }
  }
};

const resizeWindow = (
  index: number,
  data: Array<any>,
  height: number,
  setTop: any,
  setLeft: any
) => {
  if (window.innerWidth >= 768) {
    const top =
      index > 2 && index <= 5
        ? `${data.length > 6 ? height / 3 : height / 2}px`
        : index > 5
        ? `${data.length > 6 && (height / 3) * 2}px`
        : "0";
    const left = index % 3 === 0 ? "0" : index % 3 === 1 ? "33.33%" : "66.66%";
    setTop(top);
    setLeft(left);
  } else if (window.innerWidth < 768 && window.innerWidth >= 567) {
    const top =
      Math.floor(index / 2) === 0
        ? 0
        : `${(height / Math.ceil(data.length / 2)) * Math.floor(index / 2)}px`;
    const left = index % 2 === 0 ? 0 : `50%`;
    setTop(top);
    setLeft(left);
  } else {
    const top = `${(height / data.length) * index}px`;
    setTop(top);
    setLeft(null);
  }
};

export { handleScroll, setHeightFunc, setDataFunc, resizeWindow };
