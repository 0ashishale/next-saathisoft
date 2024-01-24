
const loading = () => {
  return (
    <segment>
      <div className="loader flex justify-center items-center h-[60vh] w-[100vw] ">
        <svg
          width="300"
          height="106"
          viewBox="0 0 400 160"
          fill="none"
          className="svgLoader text-[10em]"
        >
          <text
            className="text-body "
            x="50%"
            y="50%"
            dy="0.32em"
            textAnchor="middle"
          >
            SAATHisoft
          </text>
        </svg>
      </div>
    </segment>
  );
}

export default loading