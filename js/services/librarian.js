/*
	librarian.js
	Story Manager Service
	
	Written by Shir Bar Lev
*/

//librarian service to deal with exporting the changes the user makes to their stories
angular.module('StoryManager')
	.service('librarian', [function() {
		//variable declaration
		var vm = this;
		this.myStories = [{
				"id": 1,
				"name": "Sample Story",
				"synopsis": "Sample synopsis",
				"chapters": [
					{
						"number": 1,
						"title": "Sample Chapter",
						"synopsis": "Sample synopsis"
					}
				]
			}];
		this.currentlySelectedStory = 0;
		
		/*
		Function Name: addStory()
		Function Description: Add a new story.
		Parameters: story - the newly added story.
		----------------
		Programmer: Shir Bar Lev.
		*/
		this.addStory = function(story)
		{
			vm.myStories.push(story);
			vm.postToCache();
		}
		
		/*
		Function Name: deleteStory()
		Function Description: Delete a story.
		Parameters: storyNumber - the number of story to delete.
		----------------
		Programmer: Shir Bar Lev.
		*/
		this.deleteStory = function(storyNumber)
		{
			vm.myStories.splice(storyNumber - 1, 1);
			vm.postToCache();
		}
		
		/*
		Function Name: editStory()
		Function Description: Edit a story.
		Parameters:  story - the new details of the story.
								storyNumber - the number of story to edit.
		----------------
		Programmer: Shir Bar Lev.
		*/
		this.editStory = function(story, storyNumber)
		{
			vm.myStories[storyNumber - 1] = story;
		}
		
		/*
		Function Name: addChapter()
		Function Description: Add a chapter.
		Parameters: chapter - the new chapter to be added.
		----------------
		Programmer: Shir Bar Lev.
		*/
		this.addChapter = function(chapter)
		{
			vm.myStories[vm.currentlySelectedStory].chapters.push(chapter);
			vm.postToCache();
		}
		
		/*
		Function Name: deleteChapter()
		Function Description: Delete a chapter.
		Parameters: chapterNum - the number of chapter to delete.
		----------------
		Programmer: Shir Bar Lev.
		*/
		this.deleteChapter = function(chapterNum)
		{
			vm.myStories[vm.currentlySelectedStory].chapters.splice(chapterNum - 1, 1);
			vm.postToCache();
		}
		
		/*
		Function Name: editChapter()
		Function Description: Edit a chapter.
		Parameters:  chapter - the new details of the chapter.
								chapterNum - the number of chapter to delete.
		----------------
		Programmer: Shir Bar Lev.
		*/
		this.editChapter = function(chapter, chapterNum)
		{
			vm.myStories[vm.currentlySelectedStory].chapters[chapterNum - 1] = chapter;
			vm.postToCache();
		}
		
		/*
		Function Name: postToCache()
		Function Description: Sends the updated stories object to the Service Worker so they
							can be cached.
		Parameters: None.
		----------------
		Programmer: Shir Bar Lev.
		*/
		this.postToCache = function() {
			navigator.serviceWorker.controller.postMessage(vm.myStories);
		}
}]);