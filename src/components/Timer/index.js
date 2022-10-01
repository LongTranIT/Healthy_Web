import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

export default function Timer({ expiryTimestampInSecond, onExpire }) {
	const time = new Date();
	time.setSeconds(time.getSeconds() + expiryTimestampInSecond); // 10 minutes timer
	const { seconds, minutes, isRunning, start, pause, resume, restart } =
		useTimer({
			expiryTimestamp: time,
			onExpire: () => {
				onExpire();
				setTimeout(() => {
					restart(
						new Date().setSeconds(new Date().getSeconds() + expiryTimestampInSecond)
					);
				}, 1000);
			},
			autoStart: false,
		});

	return (
		<div style={{ textAlign: "center" }}>
			<div style={{ fontSize: "100px" }}>
				<span>{minutes}</span>:<span>{seconds}</span>
			</div>
			<p>{isRunning ? "Running" : "Not running"}</p>
			<button onClick={start}>Start</button>
			<button onClick={pause}>Pause</button>
			<button onClick={resume}>Resume</button>
			<button
				onClick={() => {
					// Restarts to expiryTimestampInSecond timer
					restart(
						new Date().setSeconds(new Date().getSeconds() + expiryTimestampInSecond)
					);
				}}
			>
				Restart
			</button>
		</div>
	);
}
