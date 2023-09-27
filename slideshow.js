$(function(){
	// slideshowクラスを持った要素ごとに処理を実行
	$(".slideshow").each(function(){
		let $slides = $(this).find("img"); // すべてのスライド
		let slideCount = $slides.length;   // スライドの枚数
		currentIndex = 0;                  // 現在のスライドを示すインデックス
		
		// 1番目のスライドをフェードインで実行
		$slides.eq(currentIndex).fadeIn()
		
		// 7500msごとにshowNextSlide関数を実行
		setInterval(showNextSlide, 2000);
		
		// 次のスライドを表示する関数
		function showNextSlide(){
			// 次に表示するスライドのインデックス
			// (もし最後のスライドなら最初に戻る)
			let nextIndex = (currentIndex + 1) % slideCount;
			
			// 現在のスライドをフェードアウト
			$slides.eq(currentIndex).fadeOut(1000);
			
			// 次のスライドをフェードイン
			$slides.eq(nextIndex).fadeIn(1000);
			
			// 現在のスライドのインデックスを更新
			currentIndex = nextIndex;
		}
		
	});
});
