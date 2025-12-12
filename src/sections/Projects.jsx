import React from 'react'

const useIsMobile = (query = "(max-width : 639px)") => {
  const [isMobile , setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(querry).matches
  )
  useEffecct(() => {
    if(typeof window === "undefined") return;
    const mql = window.matchMedia(querry);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change" , handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change" , handler);
  },[query])
  return isMobile;
}

function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = usememo(() => [
    {
      title : "nk studio",
      link : "https://www.nk.studio/",
      bgColor : "#0d4d3d",
      image : isMobile ? photo1 : img1
    },
    {
      title : "Gamily",
      link : "https://www.gamilyapp.studio/",
      bgColor : "#3884d3",
      image : isMobile ? photo2 : img2
    },
    {
      title : "Hungry Tiger",
      link : "https://www.eathungrytiger.studio/",
      bgColor : "#dc9317",
      image : isMobile ? photo3 : img3
    },
    
  ],[isMobile])
  return (
    <div className='w-full h-screen'>Projects</div>
  )
}

export default Projects