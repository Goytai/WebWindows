import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function useClock(callback: () => void): void {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(
      () =>
        dispatch({
          type: '@SYSTEM_UPDATEDATE',
          payload: { newDate: new Date() }
        }),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return callback();
}

export default useClock;
