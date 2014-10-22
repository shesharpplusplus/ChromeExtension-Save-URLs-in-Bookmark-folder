var TabsCollection;

chrome.browserAction.onClicked.addListener(function(tab) {
	
	chrome.tabs.query({currentWindow: true}, function(arrayOfTabs) {
			TabsCollection = arrayOfTabs;
	
	});

	var dt = new Date();
	var folderName = "" + dt.getFullYear() + dt.getMonth() + dt.getDate() + "-" + dt.getHours() +dt.getMinutes() + dt.getSeconds() + dt.getMilliseconds();
	
	chrome.bookmarks.create(
		{
			'title': folderName},
			function(newFolder) 
			{
				for (var i = 0; i < TabsCollection.length; i++ ) {
						chrome.bookmarks.create(
							{
								'parentId': newFolder.id,
								'url' : TabsCollection[i].url,
								'title' : TabsCollection[i].title
							}
						);
			}
      }
	);
});
