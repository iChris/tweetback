let data = {
	username: "iChris", // No leading @ here
	homeLabel: "Blog",
	homeUrl: "https://www.chrisenns.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;