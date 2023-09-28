import { createMachine } from "xstate";
import { feedbackState } from "./state";
import addTest from "./utils";
import { stateTests } from "./tests";

const feedbackMachine = createMachine(addTest(feedbackState, stateTests));

export default feedbackMachine;
