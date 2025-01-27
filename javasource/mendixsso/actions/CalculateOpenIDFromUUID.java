// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package mendixsso.actions;

import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import mendixsso.implementation.utils.OpenIDUtils;
import org.apache.commons.lang3.StringUtils;

public class CalculateOpenIDFromUUID extends CustomJavaAction<java.lang.String>
{
	private final java.lang.String uuid;

	public CalculateOpenIDFromUUID(
		IContext context,
		java.lang.String _uuid
	)
	{
		super(context);
		this.uuid = _uuid;
	}

	@java.lang.Override
	public java.lang.String executeAction() throws Exception
	{
		// BEGIN USER CODE
        if (StringUtils.trimToNull(uuid) == null) {
            return null;
        }

        return OpenIDUtils.getOpenID(uuid);
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "CalculateOpenIDFromUUID";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
