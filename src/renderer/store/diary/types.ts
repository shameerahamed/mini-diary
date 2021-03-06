import { Action } from "redux";

// State

export interface DiaryState {
	dateSelected: Date;
	monthSelected: Date;
	searchKey: string;
	searchResults: SearchResult[];
}

// Action types

export const SET_DATE_SELECTED = "SET_DATE_SELECTED";
export const SET_SEARCH_KEY = "SET_SEARCH_KEY";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

// Actions

export interface SetDateSelectedAction extends Action {
	type: typeof SET_DATE_SELECTED;
	payload: {
		dateSelected: Date;
	};
}

export interface SetSearchKeyAction extends Action {
	type: typeof SET_SEARCH_KEY;
	payload: {
		searchKey: string;
	};
}

export interface SetSearchResultsAction extends Action {
	type: typeof SET_SEARCH_RESULTS;
	payload: {
		searchResults: SearchResult[];
	};
}

export type DiaryAction = SetDateSelectedAction | SetSearchKeyAction | SetSearchResultsAction;
