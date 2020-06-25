const formatDate = (date: Date): any => {
  return Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(
    new Date(date).getTime(),
  );
};

export default formatDate;
