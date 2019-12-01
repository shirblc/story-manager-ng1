/*
	app.js
	Story Manager Module
	
	Written by Shir Bar Lev
*/

angular
.module('StoryManager', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	
	//home state (main/library page)
	$stateProvider.state('home', {
		templateUrl: '/views/libraryMgr.html',
		url: '/',
		controller: 'libraryCtrl as library'
	});
	
	//a story's page
	$stateProvider.state('story', {
		templateUrl: '/views/storyMgr.html',
		url: '/story/{id}',
		controller: 'storyCtrl as story'
	});
	
	//a story edit page
	$stateProvider.state('edit', {
		templateUrl: '/views/storyEdit.html',
		url: '/story/{id}/edit-story',
		controller: 'storyCtrl as story'
	});
	
	//a chapter edit page
	//child of the story edit page
	$stateProvider.state('editChapter', {
		templateUrl: '/views/chapterEdit.html',
		url:'/story/{id}/edit-story/edit-chapter/{chapterID}',
		controller: 'storyCtrl as story'
	});
}]);

if(navigator.serviceWorker)
	{
		navigator.serviceWorker.register("/sw.js");
	}