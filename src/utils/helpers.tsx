const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
}
  
export const formatDate = (timestamp: string): string => {
    const date = new Date(timestamp)
    const formattedDate = date.toLocaleDateString('en-US', options)
    
    return formattedDate
}