import React, { useState, useEffect, useRef } from 'react';
// ... (existing imports)

const MyServices = () => {
  // ... (existing state and useEffect code)

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  // ... (existing fetchServices and Service components code)

  const fetchServices = async () => {
    try {
      setRefreshing(true); // Set refreshing to true before making the request
      const response = await axios.get(`https://api.decmark.com/v1/user/errand/offers?page=${page}`);
      const data = response.data.data;
      // Check the API response data
      console.log(data);

      // Update services state based on whether it's the first page or a subsequent page
      if (page === 1) {
        setServices(data);
      } else {
        setServices((prevServices) => [...prevServices, ...data]);
      }

      setTotalPages(response.data.last_page);
      setLoading(false); // Set loading to false when the data is fetched
      setRefreshing(false); // Set refreshing to false after the data is fetched
      setLoadingMore(false); // Set loadingMore to false after loading more data
    } catch (error) {
      console.log("Error fetching services:", error);
      setLoading(false); // Set loading to false even if there's an error
      setRefreshing(false); // Set refreshing to false if there's an error
      setLoadingMore(false); // Set loadingMore to false if there's an error
    }
  };

  const handleLoadMore = () => {
    // Load more data only when there are more pages to load
    if (page < totalPages) {
      setLoadingMore(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleRefresh = () => {
    // Call the fetchServices function to refresh the data
    setPage(1); // Reset the page to 1 when refreshing
    fetchServices();
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.PRIMARY_COLOR} />
      </View>
      ) : (
        // Show service list when the data is loaded
        <FlatList
          data={services}
          bounces={false}
          contentContainerStyle={{ marginVertical: 15, paddingHorizontal: 20 }}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => <Service item={item} />}
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={[theme.PRIMARY_COLOR]}
            />
          )}
          ListFooterComponent={() => (
            // Show "Load More" button when there are more pages to load
            loadingMore ? (
              <ActivityIndicator size="small" color={theme.PRIMARY_COLOR} />
            ) : null
          )}
          onEndReached={handleLoadMore} // Load more data when reaching the end of the list
          onEndReachedThreshold={0.1} // Set a threshold for triggering onEndReached
        />
      )}
    </View>
  );
};

export default MyServices;
