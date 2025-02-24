import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Line } from "react-konva";
import "animate.css";

const DrawingBoard = () => {
  const [lines, setLines] = useState([]);
  const [color, setColor] = useState("#fffff");
  const isDrawing = useRef(false);
  const stageRef = useRef(null);
  
  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y], color }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    setLines([...lines.slice(0, -1), lastLine]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const clearCanvas = () => {
    setLines([]);
  };

  const saveDrawing = () => {
    const uri = stageRef.current.toDataURL();
    const link = document.createElement("a");
    link.href = uri;
    link.download = "my_drawing.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{ textAlign: "center", width: "600px" }}
      className="canvas-kids"
    >
      <Stage
        ref={stageRef}
        className="stage"
        width={600}
        height={600}
        style={{
          border: "2px solid black",
          background: "#fff",
          marginBottom: "10px",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.color}
              strokeWidth={10}
              lineCap="round"
              lineJoin="round"
            />
          ))}
        </Layer>
      </Stage>

      <label style={{ marginRight: "10px", fontSize: "16px" }}>
        Pen Color:
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <button
        className="clear"
        onClick={clearCanvas}
        style={{ marginRight: "10px", padding: "10px", fontSize: "16px" }}
      >
        Clear
      </button>
      <button
        className="clear save animate__animated animate__pulse animate__infinite"
        onClick={saveDrawing}
        style={{ padding: "10px", fontSize: "16px", animationDuration: "3s" }}
      >
        Save
      </button>
    </div>
  );
};

export default DrawingBoard;
