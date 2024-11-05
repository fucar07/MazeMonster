const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Arr,
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Behaviors.Flash,
		C3.Behaviors.solid,
		C3.Behaviors.EightDir,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Audio.Acts.Stop,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Behaviors.EightDir.Acts.SetEnabled,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Cnds.Every,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.System.Cnds.PickRandom,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Arr.Acts.Pop,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.Arr.Exps.Back,
		C3.Plugins.Arr.Cnds.IsEmpty,
		C3.Plugins.Arr.Exps.Width,
		C3.Plugins.System.Cnds.While,
		C3.Plugins.Arr.Cnds.CompareSize,
		C3.Plugins.Arr.Exps.IndexOf,
		C3.Plugins.Text.Exps.Text,
		C3.Behaviors.DragnDrop.Cnds.IsDragging,
		C3.Plugins.System.Exps.min,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Behaviors.EightDir.Acts.SetVectorX,
		C3.Behaviors.EightDir.Acts.SetVectorY,
		C3.Behaviors.EightDir.Acts.SetSpeed,
		C3.Plugins.Text.Acts.TypewriterText
	];
};
self.C3_JsPropNameTable = [
	{Audio: 0},
	{Browser: 0},
	{Mouse: 0},
	{Touch: 0},
	{ThingsSort: 0},
	{Tween: 0},
	{btnBasla: 0},
	{btnBilgi: 0},
	{kapla: 0},
	{btnFullScreen: 0},
	{btnHazirlayanlar: 0},
	{btnHome: 0},
	{btnKaynakca: 0},
	{durum: 0},
	{btnMuzik: 0},
	{Flash: 0},
	{btnReplay: 0},
	{Position: 0},
	{JustCreated: 0},
	{y_alt: 0},
	{x_alt: 0},
	{Solid: 0},
	{brick: 0},
	{category: 0},
	{category_door: 0},
	{"8Direction": 0},
	{character: 0},
	{animal: 0},
	{Food: 0},
	{transportation: 0},
	{bilgi: 0},
	{oyunArkaplan: 0},
	{bilgi_kutu: 0},
	{arkaplan: 0},
	{tebrikler: 0},
	{sprMebLogo: 0},
	{DragDrop: 0},
	{drag: 0},
	{dist: 0},
	{joystick: 0},
	{touchBG: 0},
	{bilgi_yazi: 0},
	{label: 0},
	{txt_kalan: 0},
	{txt_word: 0},
	{txt_Tebrikler: 0},
	{Text: 0},
	{butonlar: 0},
	{musicDevam: 0},
	{height: 0},
	{width: 0},
	{gap: 0},
	{sayac: 0},
	{categories: 0},
	{choosenCategory: 0},
	{randomsoru: 0},
	{words: 0},
	{sure: 0},
	{r: 0}
];

self.InstanceType = {
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	ThingsSort: class extends self.IArrayInstance {},
	btnBasla: class extends self.ISpriteInstance {},
	btnBilgi: class extends self.ISpriteInstance {},
	btnFullScreen: class extends self.ISpriteInstance {},
	btnHazirlayanlar: class extends self.ISpriteInstance {},
	btnHome: class extends self.ISpriteInstance {},
	btnKaynakca: class extends self.ISpriteInstance {},
	btnMuzik: class extends self.ISpriteInstance {},
	btnReplay: class extends self.ISpriteInstance {},
	brick: class extends self.ISpriteInstance {},
	category_door: class extends self.ISpriteInstance {},
	character: class extends self.ISpriteInstance {},
	animal: class extends self.ISpriteInstance {},
	Food: class extends self.ISpriteInstance {},
	transportation: class extends self.ISpriteInstance {},
	bilgi: class extends self.ISpriteInstance {},
	oyunArkaplan: class extends self.ISpriteInstance {},
	bilgi_kutu: class extends self.ISpriteInstance {},
	arkaplan: class extends self.ISpriteInstance {},
	tebrikler: class extends self.ISpriteInstance {},
	sprMebLogo: class extends self.ISpriteInstance {},
	drag: class extends self.ISpriteInstance {},
	joystick: class extends self.ISpriteInstance {},
	touchBG: class extends self.ISpriteInstance {},
	bilgi_yazi: class extends self.ITextInstance {},
	label: class extends self.ITextInstance {},
	txt_kalan: class extends self.ITextInstance {},
	txt_word: class extends self.ITextInstance {},
	txt_Tebrikler: class extends self.ITextInstance {},
	Text: class extends self.ITextInstance {},
	butonlar: class extends self.ISpriteInstance {}
}