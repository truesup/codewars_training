const whosOnline = (friends) => {
  if (!friends.length) return {};
  const result = {};
  friends.forEach(f => {
    if (f.status === 'offline') {
      (result.offline ||= []).push(f.username);
    } else if (f.lastActivity > 10) {
      (result.away ||= []).push(f.username);
    } else {
      (result.online ||= []).push(f.username);
    }
  });
  return result;
};
​