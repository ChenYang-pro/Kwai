import { RecommendMessage, RecommendCards } from '../../common/type';
import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { fetchRecommend } from '../../common/queries';
import { useQuery } from 'react-query';

function LikeLiHood() {
  const [recommendData, setRecommendData] = useState<RecommendMessage>();
  const [cards, setCards] = useState<RecommendCards[] | undefined>();
  const [pageNum, setPageNum] = useState(1);
  const [pageSize] = useState(2);
  const [totalNum, setTotalNum] = useState(1);
  const { isLoading: RecommendIsLoading } = useQuery('recommendInfo', async () => {
    const data = await fetchRecommend();
    setRecommendData(data.data);
    setTotalNum(data.data?.cards.length);
  });

  const handleChange = (e: number) => {
    setPageNum(e);
  };

  useEffect(() => {
    const startIdx = (pageNum - 1) * pageSize,
      endIdx = startIdx + pageSize;
    const pageCards = recommendData?.cards.slice(startIdx, endIdx);
    setCards(pageCards);
    console.log(startIdx, endIdx, pageCards);
  }, [pageNum, pageSize, recommendData?.cards, totalNum]);
  if (RecommendIsLoading) {
    return <div>is Loading!</div>;
  } else {
    return (
      <div className="w-full mb-16">
        <div className="bg-likelihood bg-no-repeat bg-16 bg-center flex h-8 justify-center items-center"></div>
        <div className="grid grid-cols-2">
          {cards?.map((element) => {
            return (
              <div>
                <div className="flex flex-wrap bg-white p-1">
                  <div className="flex-1 box-border overflow-hidden rounded w-2/4">
                    <div>
                      <div className="h-96 bg-recommend bg-no-repeat bg-cover bg-center"></div>
                      <div>
                        <div className="mt-1 text-xs mb-3">
                          <span>{element.recommendName}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="text-red-500 font-semibold">
                            <span>¥</span>
                            <span>{element.recommendPrice}</span>
                          </div>
                          <div className="text-gray-400 text-xs flex-1 text-right">
                            <span>已售{element.recommendSale}件</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination simple defaultCurrent={pageNum} pageSize={pageSize} total={totalNum} onChange={handleChange} />
      </div>
    );
  }
}

export default LikeLiHood;
