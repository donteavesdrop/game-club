// models/ComputerConfiguration.js
class ComputerConfiguration {
    constructor(CPU, GPU, RAM, monitor, hard_drive, mouse, keyboard, headphones) {
      this.CPU = CPU;
      this.GPU = GPU;
      this.RAM = RAM;
      this.monitor = monitor;
      this.hard_drive = hard_drive;
      this.mouse = mouse;
      this.keyboard = keyboard;
      this.headphones = headphones;
    }
  }
  
  module.exports = ComputerConfiguration;
