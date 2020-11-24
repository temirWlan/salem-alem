export const get = key => localStorage.getItem(key);
export const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const remove = key => localStorage.removeItem(key);

export default function addItemsInStorage(key, items) {
	if (items && items.length) {
		if (get(key)) {
			const savedItems = JSON.parse(get(key));
			remove(key);
			set(key, JSON.stringify([...savedItems, items]));
		} else {
			set(key, items);
		}
	}
}