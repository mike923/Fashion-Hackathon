import * as p5 from 'p5'
import * as ml5 from 'ml5'

let video;
let mobilenet;
let label = '';

export default function sketch(p) {

	// mobilenet.predict()
	const modelReady = () => {
		console.log('Model is ready')
		console.log('ml5 version:2', ml5.version);
		mobilenet.predict(gotResults)
	}

	const gotResults = (error, results) => {
		if (error) {
			// console.error(error);
		} else {
			// console.log(results);
			label = results[0].label;
			// let prop = results[0].probability;
			mobilenet.predict(gotResults)
		}
	}

	p.setup = function () {
		p.createCanvas(640, 550);
		video = p.createCapture(p5.VIDEO);
		video.hide();
		p.background(0);
		mobilenet = ml5.imageClassifier('MobileNet', video, modelReady)
	};

	p.draw = function () {
		p.background(0);
		p.image(video, 0, 0);
		p.fill(255);
		p.textSize(32);
		p.text(label, 10, p.height - 20);
	};
};