const initialState = {
	ads:  [
		{description: 'Тут должна быть реклама'}
	],
	loading: true,
	error: false
};

const AD_ADD = 'AD_ADD';
const ADS_LOADING = 'ADS_LOADING';
const ADS_REJECTED = 'ADS_REJECTED';

export default function adReducer(state = initialState, action) {
	switch (action.type) {
		case AD_ADD:		
		return {
			ad: action.payload,
			loading: false,
			error: false
		};	
		case ADS_LOADING:
		return {
			...state,
			loading: true,
			error: false
		};
		case ADS_REJECTED:
		return {
			...state, 
			loading: false,
			error: true
		};
		default:
			return state;	
	}
}