# クラスに対する前処理＆後処理のメソッドの作成
class Test_Eaxmple:
    # 前処理
    def setup_method(self):
        print('モジュールの開始時に１度だけ実行される')

    # 後処理
    def teardown_method(self):
        print('モジュールの終了時に１度だけ実行される')

    # テストケース1
    def test_case1(self):
        print('テストケース１')

    # テストケース2
    def test_case2(self):
        print('テストケース2')