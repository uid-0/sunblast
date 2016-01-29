'use strict';

function QualityManager(story) {
	var qualities = [];
	var qNameMap = {};

	this.add = function(quality) {
		if (typeof quality !== "Quality")
			throw new Error("Attempted to add non-quality");
		qualities.push(quality);
		qNameMap[quality.name] = quality;
	};

	this.get = function(name) {
		return qNameMap[name];
	};

	this.sufficient = function(gate) {
    return gate >= this.value;
  };

	this.dumpState = function() {

	};

	this.restoreState = function(state) {

	};
};

function Quality(config) {
	EventEmitter.call(this);

	this.name = config.name || "unnamedQuality";
	this.label = config.label || "Unnamed Quality";
	this.insightRequirement = config.insightRequirement || 0;
	this.value = config.startValue || 0;

	this.increase = function(value) {
		if (typeof value !== "number")
			throw new Error("quality.increase must be called with a numeric argument");
		this.value += value;
		this.emit("increased");
		this.emit("change");
	};

	this.decrease = function(value) {
		if (typeof value !== "number")
			throw new Error("quality.decrease must be called with a numeric argument");
		this.value -= value;
		this.emit("decreased");
		this.emit("change");
	};
};
