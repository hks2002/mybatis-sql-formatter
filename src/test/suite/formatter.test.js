/*******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                      *
 * @CreatedDate           : 2026-01-20 22:19:44                                *
 * @LastEditors           : Robert Huang<56649783@qq.com>                      *
 * @LastEditDate          : 2026-01-20 23:38:29                                *
 * @CopyRight             : MerBleueAviation                                   *
 ******************************************************************************/
const assert = require('assert');
const { format } = require('../../main/formatter');
const {suite, test} = require('node:test');

suite('Formatter Test Suite', () => {
	test('Complex SQL Formatting with MyBatis tags', () => {
        // Raw SQL with MyBatis tags (no <select> wrapper)
		const sqlContent = `SELECT *, CASE WHEN age > 18 THEN 'Adult' ELSE 'Minor' END AS status FROM users WHERE 1=1 <choose><when test="id != null">AND id = #{id}</when><when test="name != null">AND name = #{name}</when><otherwise>AND active = 1</otherwise></choose>`;

		const formatted = format(sqlContent);

        console.log('\n--- Complex SQL & MyBatis Formatting ---');
        console.log(`Input SQL (Fragment):\n${sqlContent}`);
        console.log(`Formatted SQL (Fragment):\n${formatted}`);
        console.log('----------------------------------------\n');

        // Basic check to ensure it doesn't crash and returns a string
        assert.ok(formatted);
        assert.ok(formatted.includes('SELECT'));
        assert.ok(formatted.includes('CASE'));
        assert.ok(formatted.includes('WHEN'));
        assert.ok(formatted.includes('<choose>'));
        assert.ok(formatted.includes('#{id}'));
	});

    test('MyBatis XML Formatting', () => {
        const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.example.UserMapper">
  <select id="selectUsers" resultType="User">
    SELECT * FROM users
    WHERE 1=1
    <if test="name != null">
      AND name like #{name}
    </if>
    <choose>
       <when test="age > 18">
          AND type = 'ADULT'
       </when>
       <otherwise>
          AND type = 'MINOR'
       </otherwise>
    </choose>
  </select>
</mapper>`;

        const formatted = format(xml);

        console.log('\n--- MyBatis XML Formatting ---');
        console.log('Input XML:\n', xml);
        console.log('Formatted XML:\n', formatted);
        console.log('------------------------------\n');

        // Assertions to verify formatting
        assert.ok(formatted);
        // Check for indentation in SQL keywords
        assert.ok(formatted.includes('SELECT'));
        assert.ok(formatted.includes('FROM'));
        assert.ok(formatted.includes('WHERE'));

        // Check if MyBatis tags are preserved
        assert.ok(formatted.includes('<if test="name != null">'));
        assert.ok(formatted.includes('<choose>'));
        assert.ok(formatted.includes('<when test="age > 18">'));

        // Check if logic structure is preserved
        const selectIndex = formatted.indexOf('<select');
        const fromIndex = formatted.indexOf('FROM');
        assert.ok(selectIndex < fromIndex);
    });
});
