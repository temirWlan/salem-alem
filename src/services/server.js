export default class SourceService {
	_apiBase = 'http://localhost:4000';
	friendsApi = 'https://social-network.samuraijs.com/api/1.0/users';

	async getResource (url) {
		const res = await fetch(`${this._apiBase}/${url}`);

		if (!res.ok) {
			throw new Error('Could not fetch!');
		}

		return await res.json();
	}

	async getPosts () {
		return await this.getResource('posts');
	}

	async getProfileInfo() {
		return await this.getResource('profileInfo');
	}

	async getFriends () {
		return await this.getResource(this.friendsApi);
	}
}