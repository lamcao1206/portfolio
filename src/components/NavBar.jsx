import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faComment, faHome, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <nav className="p-4 border-b border-gray-600">
      <div className="container mx-auto flex justify-between items-center w-[1000px]">
        <div className="text-white text-lg font-bold flex items-center">
          <FontAwesomeIcon icon={faNodeJs} className="mr-2 text-2xl text-green-500" />
          <Link to="/">Portfolio</Link>
        </div>
        <div className="space-x-2">
          <Link to="/" className="link-nav">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>
          <Link to="/projects" className="link-nav">
            <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
            Projects
          </Link>
          <Link to="/contact" className="link-nav">
            <FontAwesomeIcon icon={faComment} className="mr-2" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
