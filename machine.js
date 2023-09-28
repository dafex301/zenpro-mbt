import { createMachine } from "xstate";
import { zenproState } from "./state";
import addTest from "./utils";
import { stateTests } from "./tests";
import { guards } from "./guard";

// const feedbackMachine = createMachine(addTest(zenproState, stateTests), guards);
const zenproMachine = createMachine(zenproState, guards);

export default zenproMachine;
