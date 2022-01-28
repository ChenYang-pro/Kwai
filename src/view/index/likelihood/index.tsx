function LikeLiHood() {
  return (
    <div className="w-full">
      <div className="bg-likelihood bg-no-repeat bg-16 bg-center flex h-8 justify-center items-center"></div>
      <div className="flex flex-wrap bg-white">
        <div className="flex-1 box-border overflow-hidden rounded w-2/4">
          <div>
            <div className="h-96 bg-recommend bg-no-repeat bg-cover bg-center"></div>
            <div>
              <div className="mt-1 text-xs mb-3">
                <span>测试商品勿拍不发货包</span>
              </div>
              <div className="flex items-center">
                <div className="text-red-500 font-semibold">
                  <span>¥</span>
                  <span>2</span>
                </div>
                <div className="text-gray-400 text-xs flex-1 text-right">
                  <span>已售1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 box-border overflow-hidden rounded w-2/4 ml-1">
          <div>
            <div className="h-96 bg-recommend bg-no-repeat bg-cover bg-center"></div>
            <div>
              <div className="mt-1 text-xs mb-3">
                <span>测试商品勿拍不发货包</span>
              </div>
              <div className="flex items-center">
                <div className="text-red-500 font-semibold">
                  <span>¥</span>
                  <span>2</span>
                </div>
                <div className="text-gray-400 text-xs flex-1 text-right">
                  <span>已售1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikeLiHood;
