import "./Title.css";
import { FiThumbsUp } from "react-icons/fi"

const Title = () => {
    return (
        <div className="flex">
            <div className="mt-1 mx-3">
                <FiThumbsUp />
            </div>
            <h1 className="text-black-200">Official Recommendation</h1>
        </div>
    )
}

export default Title;
