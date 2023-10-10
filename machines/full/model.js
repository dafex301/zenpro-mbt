import { createModel } from "@xstate/test";
import zenproMachine from "./machine";
import events from "../../events/event";

const model = createModel(zenproMachine).withEvents(events);

export default model;
