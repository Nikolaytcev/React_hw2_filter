export const ProjectList = (props) => {
    const pictures = props.projects.map((project, i) => <li className="picture" key={i}>
    <img src={project.img}></img></li>)
  return (
    <ul className="pictures">
        {pictures}
    </ul>
  )
}
