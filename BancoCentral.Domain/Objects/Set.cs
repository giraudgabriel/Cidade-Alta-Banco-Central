using System.Collections.Generic;

namespace BancoCentral.Domain.Objects
{
    public class Set<T> where T : class
    {
        public Set()
        {
        }

        public Set(long totalRecords, IEnumerable<T> records)
        {
            TotalRecords = totalRecords;
            Records = records;
        }

        public IEnumerable<T> Records { get; set; }

        public long TotalRecords { get; set; }
    }
}