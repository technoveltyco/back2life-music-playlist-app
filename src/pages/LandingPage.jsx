import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="relative">

      <img
        src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="object-fill h-auto w-full" alt="Landing Page"
      />
      <Link to="/results">
        <button className="startBtn absolute bottom-4 right-4 hover:scale-110 transition-all duration-300 ease-in-out transform bg-red-400 text-white font-bold py-4 px-6 rounded-full" >

          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" fill="currentColor"
            className="w-10 h-10">
            <path fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
              clipRule="evenodd" />
          </svg>

        </button>
      </Link>

    </div>
  );
}

export default LandingPage;