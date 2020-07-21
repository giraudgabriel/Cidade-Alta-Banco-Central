using System;
using System.ComponentModel;
using System.Linq;
using System.Reflection;

namespace BancoCentral.Domain.Enums
{
    public static class EnumExtender
    {
        public static string GetDescription(this Enum enumerationValue)
        {
            var type = enumerationValue.GetType();
            var member = type.GetMembers().FirstOrDefault(w => w.Name == Enum.GetName(type, enumerationValue));
            var attribute = member?.GetCustomAttributes(typeof(DescriptionAttribute), false).FirstOrDefault() as DescriptionAttribute;
            return attribute?.Description ?? enumerationValue.ToString();
        }
        
        public static T GetEnumValue<T>(this string description)
        {
            var type = typeof(T);
            if (!type.GetTypeInfo().IsEnum)
                throw new ArgumentException();
	
            var field = type.GetFields()
                .SelectMany(f => f.GetCustomAttributes(typeof(DescriptionAttribute), false),
                    (f, a) => new {Field = f, Att = a})
                .SingleOrDefault(a => ((DescriptionAttribute) a.Att).Description == description);
            return field == null ? default(T) : (T)field.Field.GetRawConstantValue();
        }
    }
}