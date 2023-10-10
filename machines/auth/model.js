import { createModel } from "@xstate/test";
import zenproAuth from "./machine";
import events from "../../events/event";

const model = createModel(zenproAuth).withEvents(events);

export default model;
