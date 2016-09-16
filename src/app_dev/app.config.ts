

let config = {
	rootPath:"html-segments/",

	// local template url
	topNavHtmlUrl:"html-segments/top-nav.html",
	headTitleHtmlUrl:"html-segments/head-title.html",
	bottomFooterHtmlUrl:"html-segments/bottom-footer.html",
	mainBodyHtmlUrl:"html-segments/main-body.html",
	indexArticleListHtmlUrl:"html-segments/index-article-list.html",
	myInfoCardHtmlUrl:"html-segments/my-info-card.html",
	indexBannerHtmlUrl:"html-segments/index-banner.html",
	nominateArticlePanelHtmlUrl:"html-segments/nominate-article-panel.html",
	topicArticlePanelHtmlUrl:"html-segments/topic-article-panel.html",
	hotArticlePanelHtmlUrl:"html-segments/hot-article-panel.html",
	searchPanelHtmlUrl:"html-segments/search-panel.html",
	musicPanelHtmlUrl:"html-segments/music-panel.html",
	submenuPanelHtmlUrl:"html-segments/submenu-panel.html",
	// unfinished below
	indexAsideHtmlUrl:"html-segments/my-info-card.html",

	// remote ajax request url
	getCateInfoServiceUrl:"http://www.lizhiqianduan.com/myblog/Ajax/categoryData.php?fn=getCateInfo",
	getArticleListByCategoryIdUrl:"http://www.lizhiqianduan.com/myblog/Ajax/articleData.php?fn=getArtiList"
}
export {config };